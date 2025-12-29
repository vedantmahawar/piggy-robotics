export default function ServicesCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative flex flex-col border-2 p-6 rounded-2xl shadow-lg min-w-[75vw] sm:min-w-0 snap-start " +
        className
      }
    >
      {children}
    </div>
  );
}
