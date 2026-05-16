export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-navy-200 border-t-royal-600" />
        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-royal-600 text-sm font-bold text-white">
          A
        </div>
      </div>
      <p className="text-sm font-medium text-navy-500">Loading VS Bansal & Associates…</p>
    </div>
  );
}
