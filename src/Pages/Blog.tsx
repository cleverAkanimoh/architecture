import useWindowTitle from '../hooks/useWindowTitle';

export default function Blog() {
    useWindowTitle("Blog | extra text goes here");
    return (
        <div>Blog</div>
    )
}