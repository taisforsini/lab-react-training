function Greetings(props) {
  let greeting = '';

  if (props.lang === 'de') {
    greeting = `Hallo ${props.children}`;
  } else if (props.lang === 'en') {
    greeting = `Hello ${props.children}`;
  } else if (props.lang === 'es') {
    greeting = `Hola ${props.children}`;
  } else if (props.lang === 'fr') {
    greeting = `Bonjour ${props.children}`;
  }

  return (
    <div>
      <p className="p-2 bg-light border">{greeting}</p>
    </div>
  );
}

export default Greetings;
