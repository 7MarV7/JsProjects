import ReactLogo from '../assets/React_Native_Logo-1200x630.webp';

export function MainContent() {
  return (
    <>
      <main>
        <h1>Hello, World!</h1>
        <p>This is a simple static site.</p>

        {}
        <img
          src={ReactLogo}
          alt="React Logo"
          style={{ width: '150px', height: '150px' }}
        />

        <a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          itaque ullam non deserunt voluptates repudiandae magni quia, quidem
          tempore quam cumque eum minima illum placeat iusto dolorum quas
          nesciunt, voluptatum labore exercitationem rem deleniti dolore quasi
          incidunt. Aliquid quae quisquam recusandae! Doloremque laborum
          blanditiis alias placeat itaque error numquam nobis.
        </a>

        <p>It is built with React and Vite.</p>
        <p>Feel free to explore and modify it!</p>
      </main>
    </>
  );
}
