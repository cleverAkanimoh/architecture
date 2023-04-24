import useWindowTitle from "../hooks/useWindowTitle";

export default function NotFound() {
  useWindowTitle("NotFound | Architecture.com");
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 p-4">
      <h1>
        <strong className="text-[10rem] md:text-[16rem]">404</strong>
      </h1>
      <p className="text-xl md:text-3xl text-gray-light">Seems the page you're looking for does not exist</p>
    </div>
  );
}
