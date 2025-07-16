import ProtectedRoute from '@/lib/ProtectedRoute';

export default function CreatePostPage() {
  return (
    <ProtectedRoute>
      <div>
        {/* المحتوى هنا */}
      </div>
    </ProtectedRoute>
  );
}