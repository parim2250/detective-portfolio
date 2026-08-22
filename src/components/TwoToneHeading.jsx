export default function TwoToneHeading({
  first = '',
  second = '',
  as: Tag = 'h2',
  className = '',
  style = {},
  align = 'center',
}) {
  return (
    <Tag
      className={`two-tone-heading ${className}`}
      style={{ textAlign: align, ...style }}
    >
      <span className="tone-light">{first}</span>
      {second ? (
        <>
          {' '}
          <span className="tone-gold">{second}</span>
        </>
      ) : null}
    </Tag>
  );
}