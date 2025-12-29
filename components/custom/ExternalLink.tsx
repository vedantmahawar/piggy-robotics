export default function ExternalLink({
  link,
  children,
  color = "nocolor",
  className,
}: {
  link: string;
  children: React.ReactNode;
  color?: "red" | "green" | "blue" | "yellow" | "black" | "nocolor";
  className?: string;
}) {
  const colorVariants = {
    red: "text-red-600 hover:text-red-700",
    green: "text-green-600 hover:text-green-700",
    blue: "text-blue-600 hover:text-blue-700",
    yellow: "text-amber-600 hover:text-amber-700",
    black: "text-gray-600 hover:text-gray-700",
    nocolor: "",
  };
  return (
    <a
      href={link}
      className={colorVariants[color] + " " + className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
