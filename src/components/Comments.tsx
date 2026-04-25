import React, { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, onSnapshot, query, orderBy, addDoc, deleteDoc, doc, serverTimestamp, getDocs } from 'firebase/firestore';
import { Trash2, MessageSquare, User } from 'lucide-react';

interface Comment {
  id: string;
  text: string;
  userId: string;
  userName: string;
  createdAt: any;
}

enum OperationType {
  CREATE = 'create',
  DELETE = 'delete',
  LIST = 'list',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email
    }
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;
    
    // Fallback to getDocs just to make sure we fetch if snapshot fails initially
    const fetchComments = async () => {
      try {
        const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
        setComments(data);
      } catch (err) {
        console.error("Fetch error", err);
      }
    };
    fetchComments();

    const pathForOnSnapshot = 'comments';
    const q = query(collection(db, pathForOnSnapshot), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: Comment[] = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as Comment);
      });
      setComments(results);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, pathForOnSnapshot);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !auth.currentUser) return;
    
    setSubmitting(true);
    const pathForWrite = 'comments';
    try {
      await addDoc(collection(db, pathForWrite), {
        text: newComment.trim(),
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName || auth.currentUser.email?.split('@')[0] || 'مستخدم',
        createdAt: serverTimestamp()
      });
      setNewComment('');
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, pathForWrite);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, userId: string) => {
    if (!auth.currentUser || auth.currentUser.uid !== userId) return;
    
    if (window.confirm('هل أنت متأكد من حذف هذا التعليق؟')) {
      const pathForWrite = `comments/${id}`;
      try {
        await deleteDoc(doc(db, 'comments', id));
      } catch (err) {
        handleFirestoreError(err, OperationType.DELETE, pathForWrite);
      }
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500 w-full max-w-4xl mx-auto dark:text-gray-400">جاري تحميل التعليقات...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 w-full no-print">
      <div className="flex items-center gap-2 mb-6 text-emerald-700 dark:text-emerald-500">
        <MessageSquare size={24} />
        <h2 className="text-2xl font-bold">التعليقات والمناقشات</h2>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 relative">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="أضف تعليقاً أو استفساراً..."
          className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 outline-none resize-y min-h-[100px] mb-2 bg-gray-50 dark:bg-gray-700 dark:text-white"
          disabled={submitting}
        />
        <button
          type="submit"
          disabled={submitting || !newComment.trim()}
          className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed m-1"
        >
          {submitting ? 'جاري الإرسال...' : 'إرسال التعليق'}
        </button>
      </form>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">لا يوجد تعليقات حتى الآن. كن أول من يعلق!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 rounded-full flex items-center justify-center">
                  <User size={20} />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-gray-900 dark:text-gray-100">{comment.userName}</span>
                  {auth.currentUser?.uid === comment.userId && (
                    <button
                      onClick={() => handleDelete(comment.id, comment.userId)}
                      className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 p-1 rounded transition-colors"
                      title="حذف التعليق"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                  {comment.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
