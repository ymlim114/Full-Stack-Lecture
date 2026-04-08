// import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
// import Welcome from './component/Welcome';
// import styles from './App.module.css';

function App() {
  // const name = 'Lim';
  // const naver = {
  //   name: "네이버",
  //   url: "https://www.naver.com",
  // };

  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
      {/* <div className={styles.box}>App</div>
      <Welcome />
      <h1
        style={{
          color: 'red',
          backgroundColor: 'green',
        }}
      >
        Hello, {name}.<p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a> */}
    </div>
  );
}

export default App;
