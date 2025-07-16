"use client";

import { useEffect } from "react";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                      router.push("/dashboard");
                            }
                                });

                                    return () => unsubscribe();
                                      }, []);

                                        return (
                                            <div className="flex flex-col items-center justify-center min-h-screen p-6">
                                                  <h1 className="text-3xl font-bold mb-6">مرحبًا بك في المنصة</h1>
                                                        <p className="mb-4 text-center">يرجى تسجيل الدخول أو إنشاء حساب للمتابعة.</p>
                                                              <div className="flex gap-4">
                                                                      <a
                                                                                href="/login"
                                                                                          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                                                                                  >
                                                                                                            تسجيل الدخول
                                                                                                                    </a>
                                                                                                                            <a
                                                                                                                                      href="/register"
                                                                                                                                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                                                                                                                                                        >
                                                                                                                                                                  إنشاء حساب
                                                                                                                                                                          </a>
                                                                                                                                                                                </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                      );
                                                                                                                                                                                      }