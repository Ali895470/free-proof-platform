"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useRouter } from "next/navigation";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
    const router = useRouter();

      // 🔐 حماية الصفحة
        useEffect(() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
                if (!isLoggedIn) {
                      router.push("/");
                          }
                            }, []);

                              // 📥 تحميل المنشورات من Firestore
                                useEffect(() => {
                                    const fetchPosts = async () => {
                                          try {
                                                  const querySnapshot = await getDocs(collection(db, "posts"));
                                                          const postsArray = querySnapshot.docs.map((doc) => ({
                                                                    id: doc.id,
                                                                              ...doc.data(),
                                                                                      }));
                                                                                              setPosts(postsArray);
                                                                                                    } catch (error) {
                                                                                                            console.error("خطأ أثناء جلب المنشورات:", error);
                                                                                                                  }
                                                                                                                      };

                                                                                                                          fetchPosts();
                                                                                                                            }, []);

                                                                                                                              // 🗑️ حذف منشور
                                                                                                                                const handleDelete = async (id) => {
                                                                                                                                    const confirmDelete = window.confirm("هل أنت متأكد من حذف المنشور؟");
                                                                                                                                        if (!confirmDelete) return;

                                                                                                                                            try {
                                                                                                                                                  await deleteDoc(doc(db, "posts", id));
                                                                                                                                                        setPosts(posts.filter((post) => post.id !== id));
                                                                                                                                                            } catch (error) {
                                                                                                                                                                  console.error("خطأ أثناء حذف المنشور:", error);
                                                                                                                                                                      }
                                                                                                                                                                        };

                                                                                                                                                                          // ✏️ تعديل منشور
                                                                                                                                                                            const handleEdit = (id) => {
                                                                                                                                                                                router.push(`/editpost?id=${id}`);
                                                                                                                                                                                  };

                                                                                                                                                                                    // 👁️ عرض تفاصيل
                                                                                                                                                                                      const handleView = (id) => {
                                                                                                                                                                                          router.push(`/singlepost/${id}`);
                                                                                                                                                                                            };

                                                                                                                                                                                              return (
                                                                                                                                                                                                  <div style={{ padding: "20px" }}>
                                                                                                                                                                                                        <h1>جميع المنشورات</h1>
                                                                                                                                                                                                              {posts.length === 0 ? (
                                                                                                                                                                                                                      <p>لا توجد منشورات حتى الآن.</p>
                                                                                                                                                                                                                            ) : (
                                                                                                                                                                                                                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                                                                                                                                                                                                                              {posts.map((post) => (
                                                                                                                                                                                                                                                          <li key={post.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
                                                                                                                                                                                                                                                                        <h2>{post.title}</h2>
                                                                                                                                                                                                                                                                                      <p>{post.content}</p>
                                                                                                                                                                                                                                                                                                    <button onClick={() => handleView(post.id)}>عرض التفاصيل</button>
                                                                                                                                                                                                                                                                                                                  <button onClick={() => handleEdit(post.id)}>تعديل</button>
                                                                                                                                                                                                                                                                                                                                <button onClick={() => handleDelete(post.id)}>حذف</button>
                                                                                                                                                                                                                                                                                                                                            </li>
                                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                              </ul>
                                                                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                          }