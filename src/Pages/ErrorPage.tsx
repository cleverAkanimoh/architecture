import useWindowTitle from "../hooks/useWindowTitle";

export default function ErrorPage() {
    useWindowTitle("Error | extra text goes here");
    return (
        <div className="min-h-screen flex items-center justify-center">Error Page</div>
    )
}
