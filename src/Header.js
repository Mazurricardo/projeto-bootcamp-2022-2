import LogoVip from './imagens/LogoViptech.png'
function Header() {
  return (
    <header className="viptech">
      <div className="Colors">
        {' '}
        <img className="logoViptech" src={LogoVip} alt="imagem viptech" />{' '}
      </div>{' '}
    </header>
  )
}
export default Header
