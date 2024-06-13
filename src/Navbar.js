import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import nav from './Nav';

function Navbar() {

  const [navClass, setNavClass] = useState('navbar')
  const [menuToggle, setMenuToggle] = useState({
    listClass: 'menu',
    button: <MenuRoundedIcon style={{ color: '#fff' }} />,
    toggleStatus: false,
  });

  const toggleMenu = () => {

    if (menuToggle.toggleStatus == false) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu active',
          button: <CloseRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });
    } else if (menuToggle.toggleStatus == true) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu',
          button: <MenuRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setNavClass('navbar stickyNav');
    } else {
      setNavClass('navbar');
    }
  });

  let logoPath = null;
  let about = null;
  let service = null;
  let skill = null;
  let contact = null;
  let classes = [];

  useEffect(() => {

    classes['chlid0'] = document.getElementsByClassName('child0')[0].children[0];
    classes['chlid1'] = document.getElementsByClassName('child1')[0].children[0];
    classes['chlid2'] = document.getElementsByClassName('child2')[0].children[0];
    classes['chlid3'] = document.getElementsByClassName('child3')[0].children[0];
    classes['chlid4'] = document.getElementsByClassName('child4')[0].children[0];

    let path = document.getElementsByClassName("url");
    logoPath = document.getElementById("logo");
    service = document.getElementById("services");
    about = document.getElementById("about");
    skill = document.getElementById("skills");
    contact = document.getElementById("contact");

    path[0].addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, 0);
    });

    // document.addEventListener('scroll', () => {
    //   if (window.scrollY > about.offsetTop - 250) {
    //     document.getEle.set
    //   }
    // });

    path[1].addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, about.offsetTop - 60);
    });

    path[2].addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, service.offsetTop - 127);
    });
    path[3].addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, skill.offsetTop - 60);
    });
    path[4].addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, contact.offsetTop - 30);
    });

    logoPath.addEventListener('click', (event) => {
      window.scrollTo(0, 0);

    })

  }, [])

  useEffect(() => {
    document.addEventListener('scroll', event => {
      if (window.scrollY >= logoPath.offsetTop && window.scrollY <= about.offsetTop - 250) {
        classes['chlid0'].setAttribute('class', 'url activeLink');
        classes['chlid1'].setAttribute('class', 'url');
        classes['chlid2'].setAttribute('class', 'url');
        classes['chlid3'].setAttribute('class', 'url');
        classes['chlid4'].setAttribute('class', 'url');
      } else if (window.scrollY >= about.offsetTop - 250 && window.scrollY <= service.offsetTop -250) {
        classes['chlid1'].setAttribute('class', 'url activeLink');
        classes['chlid0'].setAttribute('class', 'url');
        classes['chlid2'].setAttribute('class', 'url');
        classes['chlid3'].setAttribute('class', 'url');
        classes['chlid4'].setAttribute('class', 'url');
      } else if (window.scrollY >= service.offsetTop -250 && window.scrollY <= skill.offsetTop - 250) {
        classes['chlid2'].setAttribute('class', 'url activeLink');
        classes['chlid1'].setAttribute('class', 'url');
        classes['chlid0'].setAttribute('class', 'url');
        classes['chlid3'].setAttribute('class', 'url');
        classes['chlid4'].setAttribute('class', 'url');
      } else if (window.scrollY >= skill.offsetTop - 250 && window.scrollY <= contact.offsetTop - 250) {
        classes['chlid3'].setAttribute('class', 'url activeLink');
        classes['chlid1'].setAttribute('class', 'url');
        classes['chlid2'].setAttribute('class', 'url');
        classes['chlid0'].setAttribute('class', 'url');
        classes['chlid4'].setAttribute('class', 'url');
      } else if (window.scrollY >= contact.offsetTop -250) {
        classes['chlid4'].setAttribute('class', 'url activeLink');
        classes['chlid1'].setAttribute('class', 'url');
        classes['chlid2'].setAttribute('class', 'url');
        classes['chlid3'].setAttribute('class', 'url');
        classes['chlid0'].setAttribute('class', 'url');
      }
    })
  }, [])


  return (
    <>
      <nav className={navClass}>
        <div className='max-width'>
          <div className='logo' id='logo'><a href='localhost:3000/portfolio/#'>Ayesha<span>Siddiqua</span></a></div>

          <ul className={menuToggle.listClass}>
            {nav.map((val, index) => {
              return (
                <li key={index} className={"child" + index}>
                  <a className="url" onClick={toggleMenu} href={val.path}>{val.name}</a>
                </li>
              );
            })}
          </ul>

          <div className='menu-btn'>
            <IconButton onClick={toggleMenu} aria-label="MenuRoundedIcon">
              {menuToggle.button}
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;