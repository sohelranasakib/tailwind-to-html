tailwind.config = {
    theme: {
      extend: {
        // color start
        colors: {
          headerBg:'rgba(22, 12, 110, 0.8)',
          hoverColoer:'#1BBF00',
          banner_overly:'rgba(107, 99, 197, 0.9)',
          bannerColor:'#FAFAFE',
          serviceColoerh4:'#141135',
          beforeColor:'#4F585F',
          whyColorP:'#726E9E',
          workbg:'#F6F5FF',
          workhoverColor:'#6B62C5',
          workbuttoncolor:'#88c77f',
          projectbg:'#F9F9FB',
          projectpichover:'#9591c5',
          projectbgpic:'#ECEDF0',
          
        },
        // color end

        // container part start
        maxWidth: {
            headerContainer: '1170px',
            bannerContainer: '1170px',
          },
        // container part end
        // font family start
        fontFamily: {
            'openS': ['Open Sans', 'sans-serif'],
            'paprika': ['Paprika', 'sans-serif'],
            
          },
        // font family end
        // backround image start
        backgroundImage: {
            'banner_bg': "url('images/banner_bg.png')",
            'service_bg': "url('images/service_bg.png')",
            'why_bg': "url('images/whyBg.png')",
            'protfolio_bg': "url('images/protfoliobg.png')",
            
          }
        // backround image end
      }
    }
  }