"For things that must re-render each time on (e.g. loading animation).";
export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="animate-appear">{children}</div>;
}
