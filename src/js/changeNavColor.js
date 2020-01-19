const changeColor = () => {
  let fromTop = window.pageYOffset;
  const navigation = document.querySelector('.navigation');
  console.log(window.pageYOffset);
  if (fromTop >= 60) {
    navigation.style.backgroundColor = '#f2f2f2';
    navigation.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.1)';
  } else {
    navigation.style.backgroundColor = '#fff';
    navigation.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.1)';
  }
};

export default changeColor;
