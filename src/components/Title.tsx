interface TitleProps {
  title: string;
}

const Title = (props: TitleProps): JSX.Element => {
  const { title } = props;

  return <h1 className="text-white text-center m-4 mb-10 text-4xl font-bold">{title}</h1>;
};

export default Title;
