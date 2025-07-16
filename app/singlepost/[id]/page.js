"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function SinglePostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
          setPost(postSnap.data());
        } else {
          console.warn("المنشور غير موجود");
        }
      } catch (error) {
        console.error("فشل في جلب المنشور:", error);
      }

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="p-4">جاري التحميل...</p>;

  if (!post) return <p className="p-4">لم يتم العثور على المنشور.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-sm text-gray-500">
        تم النشر في:{" "}
        {post.createdAt?.toDate().toLocaleString("ar-EG") || "غير معروف"}
      </p>
    </div>
  );
}