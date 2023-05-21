type H3Props = {
  text: string;
}

const H3 = ({ text}: H3Props) => <h3 className="border-b border-gray-dim text-white font-bold py-2 text-sm sm:text-base md:text-lg text-center sm2:text-left">{text}</h3>;

export default H3;