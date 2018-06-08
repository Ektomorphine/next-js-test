import Header from './Header'

let val = [];

const layoutStyle = {
  margin: 0,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout;
