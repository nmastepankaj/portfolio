  // --bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-light:#f8f9fa;--bs-dark:#212529;
  var donen = document.querySelector(':root');

  const changedefault  = [["--psr-main-100","#FFF3CD"],["--psr-main-200","#FFE69C"],["--psr-main-300","#FFDA6A"],["--psr-main-400","#FFCD39"],["--psr-main-500","#FFC107"],["--psr-main-600","#CC9A06"],["--psr-main-700","#997404"],["--psr-main-800","#664D03"],["--psr-main-900","#332701"],["--psr-white","#fff"],["--psr-black","#000"]];
  const bluemode  = [["--psr-main-100","#CFE2FF"],["--psr-main-200","#9EC5FE"],["--psr-main-300","#6EA8FE"],["--psr-main-400","#3D8BFD"],["--psr-main-500","#0D6EFD"],["--psr-main-600","#0A58CA"],["--psr-main-700","#084298"],["--psr-main-800","#052C65"],["--psr-main-900","#031633"],["--psr-white","#fff"],["--psr-black","#000"]];
  const greenmode  = [["--psr-main-100","#D2F4EA"],["--psr-main-200","#A6E9D5"],["--psr-main-300","#4DD4AC"],["--psr-main-400","#20C997"],["--psr-main-500","#1AA179"],["--psr-main-600","#1AA179"],["--psr-main-700","#0D503C"],["--psr-main-800","#06281E"],["--psr-main-900","#000000"],["--psr-white","#fff"],["--psr-black","#000"]];
  const redmode  = [["--psr-main-100","#F8D7DA"],["--psr-main-200","#EA868F"],["--psr-main-300","#EA868F"],["--psr-main-400","#E35D6A"],["--psr-main-500","#DC3545"],["--psr-main-600","#842029"],["--psr-main-700","#842029"],["--psr-main-800","#2C0B0E"],["--psr-main-900","#198754"],["--psr-white","#fff"],["--psr-black","#000"]];
  const pinkmode  = [["--psr-main-100","#F7D6E6"],["--psr-main-200","#EFADCE"],["--psr-main-300","#DE5C9D"],["--psr-main-400","#DE5C9D"],["--psr-main-500","#AB296A"],["--psr-main-600","#AB296A"],["--psr-main-700","#801F4F"],["--psr-main-800","#2B0A1A"],["--psr-main-900","#FFFFFF"],["--psr-white","#fff"],["--psr-black","#000"]];
  const orangemode  = [["--psr-main-100","#FECBA1"],["--psr-main-200","#FEB272"],["--psr-main-300","#FEB272"],["--psr-main-400","#FD7E14"],["--psr-main-500","#FD7E14"],["--psr-main-600","#984C0C"],["--psr-main-700","#653208"],["--psr-main-800","#331904"],["--psr-main-900","#FFFFFF"],["--psr-white","#fff"],["--psr-black","#000"]];
  const purplemode  = [["--psr-main-100","#C5B3E6"],["--psr-main-200","#A98EDA"],["--psr-main-300","#8C68CD"],["--psr-main-400","#6F42C1"],["--psr-main-500","#59359A"],["--psr-main-600","#432874"],["--psr-main-700","#2C1A4D"],["--psr-main-800","#160D27"],["--psr-main-900","#FFFFFF"],["--psr-white","#fff"],["--psr-black","#000"]];

  const greymode = [["--psr-main-100","#212529"],["--psr-main-200","#343A40"],["--psr-main-300","#495057"],["--psr-main-400","#6C757D"],["--psr-main-500","#ADB5BD"],["--psr-main-600","#CED4DA"],["--psr-main-700","#DEE2E6"],["--psr-main-800","#E9ECEF"],["--psr-main-900","#F8F9FA"],["--psr-white","#000"],["--psr-black","#fff"]];

  function greenMode(){
    changeTheme(greenmode);
  }

  function redMode(){
    changeTheme(redmode);
  }

  function pinkMode(){
    changeTheme(pinkmode);
  }
  function orangeMode(){
    changeTheme(orangemode);
  }
  function blueMode(){
    changeTheme(bluemode);
  }
  function purpleMode(){
    changeTheme(purplemode);
  }
  function greyMode(){
    changeTheme(greymode);
  }

  function changeTheme(changetheme){
    for (let i = 0; i < changetheme.length; i++) {
        donen.style.setProperty(changetheme[i][0],changetheme[i][1]);
    }
  }

  const changefont = [["--psr-text-sm",12],["--psr-text-md",18],["--psr-text-lg",20],["--psr-text-xl",24],["--psr-text-xxl",32],["--psr-text-xxxl",48]]

  function changeFont(val){
    for (let i = 0; i < changefont.length; i++) {
    donen.style.setProperty(changefont[i][0],changefont[i][1]*val+"px");
    }
  }

  function defaultMode(){
    changeTheme(changedefault);
    for (let i = 0; i < changefont.length; i++) {
      donen.style.setProperty(changefont[i][0],changefont[i][1]+"px");
      }
  }