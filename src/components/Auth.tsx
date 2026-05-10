import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';

interface AuthProps {
  onSuccess: () => void;
}

export default function Auth({ onSuccess }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        onSuccess();
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
        onSuccess();
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('هذا البريد الإلكتروني مسجل مسبقاً.');
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('بيانات الدخول غير صحيحة، تأكد من البريد الإلكتروني وكلمة المرور أو قم بإنشاء حساب جديد.');
      } else if (err.code === 'auth/weak-password') {
        setError('كلمة المرور ضعيفة. يجب أن تتكون من 6 أحرف على الأقل.');
      } else if (err.code === 'auth/network-request-failed') {
        if (window.self !== window.top) {
           setError('يرجى فتح التطبيق في نافذة جديدة (من خلال زر الفتح بأعلى الشاشة) حتى تتمكن من تسجيل الدخول، حيث قد تمنع بيئة المعاينة بعض الاتصالات.');
        } else {
           setError('فشل الاتصال بالشبكة. يرجى التأكد من اتصالك بالإنترنت، وتعطيل إضافات حجب الإعلانات (AdBlockers) ثم المحاولة مجدداً.');
        }
      } else {
        setError(err.message || 'حدث خطأ غير متوقع.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
          موقع البوصلة
        </h2>
        <p className="mt-2 text-center text-sm text-black">
          {isLogin ? 'قم بتسجيل الدخول للاستمرار' : 'أنشئ حساباً جديداً للانضمام إلينا'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  الاسم الكامل
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                البريد الإلكتروني
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                كلمة المرور
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 mr-2 border-r-0">
                تذكرني محتفظاً بتسجيل الدخول
              </label>
            </div>

            {error && (
              <div className="text-rose-600 text-sm font-medium bg-rose-50 p-3 rounded text-center border border-rose-100 flex flex-col items-center gap-2">
                <p>{error}</p>
                {window.self !== window.top && error.includes('نافذة جديدة') && (
                  <a 
                    href={window.location.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
                  >
                    فتح التطبيق في نافذة جديدة
                  </a>
                )}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'الرجاء الانتظار...' : (isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد')}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
            >
              {isLogin ? 'ليس لديك حساب؟ أنشئ حساباً جديداً' : 'لديك حساب بالفعل؟ قم بتسجيل الدخول'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
