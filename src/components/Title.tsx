interface TitleProps {
  title: string
}
const Title = (props: TitleProps): JSX.Element => {
  const {title} = props;

  return (
    <h1 className="text-center mb-4">{title}</h1>
  );
}

export default Title;
