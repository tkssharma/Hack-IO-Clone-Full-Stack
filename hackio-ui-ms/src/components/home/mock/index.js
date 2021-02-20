const mock = {
    data: [
      {
        title: 'Python',
        url: 'https://hackr.io/tutorials/python/logo-python.svg?ver=1562823957',
      },
      {
        title: 'JavaScript',
        url:
          'https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1553668920',
      },
      {
        title: 'Android Development',
        url:
          'https://hackr.io/tutorials/android-development/logo-android-development.svg?ver=1550798222',
      },
      {
        title: 'Java',
        url: 'https://hackr.io/tutorials/java/logo-java.svg?ver=1550798239',
      },
      {
        title: 'React',
        url: 'https://hackr.io/tutorials/react/logo-react.svg?ver=1555134603',
      },
      {
        title: 'C++',
        url:
          'https://hackr.io/tutorials/c-plus-plus/logo-c-plus-plus.svg?ver=1550843650',
      },
      {
        title: 'Data Structures and Algorithms',
        url:
          'https://hackr.io/tutorials/data-structures-algorithms/logo-data-structures-algorithms.svg?ver=1550834269',
      },
      {
        title: 'Angular',
        url: 'https://hackr.io/tutorials/angular/logo-angular.svg?ver=1550774724',
      },
      {
        title: 'HTML 5',
        url: 'https://hackr.io/tutorials/html-5/logo-html-5.svg?ver=1555389548',
      },
      {
        title: 'CSS',
        url: 'https://hackr.io/tutorials/css/logo-css.svg?ver=1550727061',
      },
      {
        title: 'C',
        url: 'https://hackr.io/tutorials/c/logo-c.svg?ver=1553674176',
      },
      {
        title: 'Node.js',
        url: 'https://hackr.io/tutorials/node-js/logo-node-js.svg?ver=1555389930',
      },
      {
        title: 'Git',
        url: 'https://hackr.io/tutorials/git/logo-git.svg?ver=1550796487',
      },
      {
        title: 'PHP',
        url: 'https://hackr.io/tutorials/php/logo-php.svg?ver=1550804797',
      },
      {
        title: 'C#',
        url: 'https://hackr.io/tutorials/c-sharp/logo-c-sharp.svg?ver=1550834232',
      },
      {
        title: 'Bootstrap',
        url:
          'https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097',
      },
      {
        title: 'Information Security & Ethical Hacking',
        url:
          'https://hackr.io/tutorials/information-security-ethical-hacking/logo-information-security-ethical-hacking.svg?ver=1550798260',
      },
      {
        title: 'Blockchain Programming',
        url:
          'https://hackr.io/tutorials/blockchain-programming/logo-blockchain-programming.svg?ver=1550824665',
      },
      {
        title: 'Django',
        url: 'https://hackr.io/tutorials/django/logo-django.svg?ver=1550466502',
      },
      {
        title: 'MySQL',
        url: 'https://hackr.io/tutorials/mysql/logo-mysql.svg?ver=1550613740',
      },
      {
        title: 'Arduino',
        url: 'https://hackr.io/tutorials/arduino/logo-arduino.svg?ver=1551766080',
      },
      {
        title: 'SQL',
        url: 'https://hackr.io/tutorials/sql/logo-sql.svg?ver=1555309685',
      },
      {
        title: 'Unity',
        url: 'https://hackr.io/tutorials/unity/logo-unity.svg?ver=1550665141',
      },
      {
        title: 'React Native',
        url:
          'https://hackr.io/tutorials/react-native/logo-react-native.svg?ver=1555132575',
      },
      {
        title: 'Intro to Programming',
        url:
          'https://hackr.io/tutorials/intro-to-programming/logo-intro-to-programming.svg?ver=1550761991',
      },
      {
        title: 'jQuery',
        url: 'https://hackr.io/tutorials/jquery/logo-jquery.svg?ver=1557130183',
      },
      {
        title: 'Vue.js',
        url: 'https://hackr.io/tutorials/vue-js/logo-vue-js.svg?ver=1555390471',
      },
      {
        title: 'Bitcoin',
        url: 'https://hackr.io/tutorials/bitcoin/logo-bitcoin.svg?ver=1552469443',
      },
      {
        title: 'Go',
        url: 'https://hackr.io/tutorials/golang/logo-golang.svg?ver=1555401655',
      },
      {
        title: 'ASP.NET',
        url: 'https://hackr.io/tutorials/asp-net/logo-asp-net.svg?ver=1555328015',
      },
      {
        title: 'iOS Swift',
        url:
          'https://hackr.io/tutorials/ios-swift/logo-ios-swift.svg?ver=1550689130',
      },
      {
        title: 'Kotlin',
        url: 'https://hackr.io/tutorials/kotlin/logo-kotlin.svg?ver=1555389603',
      },
      {
        title: 'Flutter',
        url: 'https://hackr.io/tutorials/flutter/logo-flutter.svg?ver=1551354757',
      },
      {
        title: 'TypeScript',
        url:
          'https://hackr.io/tutorials/typescript/logo-typescript.svg?ver=1550646462',
      },
      {
        title: 'Java Spring Framework',
        url:
          'https://hackr.io/tutorials/java-spring-framework/logo-java-spring-framework.svg?ver=1555390385',
      },
      {
        title: 'Laravel',
        url: 'https://hackr.io/tutorials/laravel/logo-laravel.svg?ver=1550762399',
      },
      {
        title: 'Google Analytics',
        url:
          'https://hackr.io/tutorials/google-analytics/logo-google-analytics.svg?ver=1551354757',
      },
      {
        title: 'Ruby',
        url: 'https://hackr.io/tutorials/ruby/logo-ruby.svg?ver=1550555255',
      },
      {
        title: 'Redux',
        url: 'https://hackr.io/tutorials/redux/logo-redux.svg?ver=1551354757',
      },
      {
        title: 'PostgreSQL',
        url:
          'https://hackr.io/tutorials/postgresql/logo-postgresql.svg?ver=1555390079',
      },
      {
        title: 'SEO',
        url: 'https://hackr.io/tutorials/seo/logo-seo.svg?ver=1550050459',
      },
      {
        title: 'Growth Hacking',
        url:
          'https://hackr.io/tutorials/growth-hacking/logo-growth-hacking.svg?ver=1551354757',
      },
      {
        title: 'Electron',
        url:
          'https://hackr.io/tutorials/electron/logo-electron.svg?ver=1551354757',
      },
      {
        title: 'Ruby on Rails',
        url:
          'https://hackr.io/tutorials/ruby-on-rails/logo-ruby-on-rails.svg?ver=1551354757',
      },
      {
        title: 'Elastic Search',
        url:
          'https://hackr.io/tutorials/elastic-search/logo-elastic-search.svg?ver=1558117410',
      },
      {
        title: 'Virtual Reality',
        url:
          'https://hackr.io/tutorials/virtual-reality/logo-virtual-reality.svg?ver=1563364635',
      },
      {
        title: 'Visual Basic .NET',
        url:
          'https://hackr.io/tutorials/visual-basic-net-vb/logo-visual-basic-net-vb.svg?ver=1551354757',
      },
      {
        title: 'Software Testing',
        url:
          'https://hackr.io/tutorials/software-testing/logo-software-testing.svg?ver=1553834045',
      },
      {
        title: 'Selenium',
        url:
          'https://hackr.io/tutorials/selenium/logo-selenium.svg?ver=1556099522',
      },
      {
        title: 'Unreal Engine',
        url:
          'https://hackr.io/tutorials/unreal-engine/logo-unreal-engine.svg?ver=1551354757',
      },
      {
        title: 'Alexa Skills Kit',
        url:
          'https://hackr.io/tutorials/alexa-skills-kit-ask/logo-alexa-skills-kit-ask.svg?ver=1554107807',
      },
      {
        title: 'Scala',
        url: 'https://hackr.io/tutorials/scala/logo-scala.svg?ver=1556099539',
      },
      {
        title: 'Elixir',
        url: 'https://hackr.io/tutorials/elixir/logo-elixir.svg?ver=1550559335',
      },
      {
        title: 'Website Performance',
        url:
          'https://hackr.io/tutorials/website-performance/logo-website-performance.svg?ver=1551354757',
      },
      {
        title: 'Ionic',
        url: 'https://hackr.io/tutorials/ionic/logo-ionic.svg?ver=1555132763',
      },
      {
        title: 'Xamarin',
        url: 'https://hackr.io/tutorials/xamarin/logo-xamarin.svg?ver=1555132966',
      },
      {
        title: 'Solidity',
        url:
          'https://hackr.io/tutorials/solidity/logo-solidity.svg?ver=1553831680',
      },
      {
        title: 'Photoshop',
        url:
          'https://hackr.io/tutorials/photoshop/logo-photoshop.svg?ver=1550076795',
      },
      {
        title: 'Game Design',
        url:
          'https://hackr.io/tutorials/game-design/logo-game-design.svg?ver=1550671635',
      },
      {
        title: 'User Interface Design',
        url:
          'https://hackr.io/tutorials/user-interface-design/logo-user-interface-design.svg?ver=1559981005',
      },
      {
        title: 'Design thinking',
        url:
          'https://hackr.io/tutorials/design-thinking/logo-design-thinking.svg?ver=1550483195',
      },
      {
        title: 'Adobe After Effects',
        url:
          'https://hackr.io/tutorials/adobe-after-effects/logo-adobe-after-effects.svg?ver=1550033265',
      },
      {
        title: 'Illustrator',
        url:
          'https://hackr.io/tutorials/adobe-illustrator/logo-adobe-illustrator.svg?ver=1550076656',
      },
      {
        title: 'Adobe Experience Design',
        url:
          'https://hackr.io/tutorials/adobe-experience-design/logo-adobe-experience-design.svg?ver=1549985484',
      },
      {
        title: 'Sketch',
        url: 'https://hackr.io/tutorials/sketch/logo-sketch.svg?ver=1550326944',
      },
      {
        title: 'Adobe Premier Pro',
        url:
          'https://hackr.io/tutorials/adobe-premier-pro/logo-adobe-premier-pro.svg?ver=1549393149',
      },
      {
        title: 'Adobe Lightroom',
        url:
          'https://hackr.io/tutorials/adobe-lightroom/logo-adobe-lightroom.svg?ver=1550669322',
      },
      {
        title: 'Blender',
        url: 'https://hackr.io/tutorials/blender/logo-blender.svg?ver=1550467298',
      },
      {
        title: 'User Experience Design',
        url:
          'https://hackr.io/tutorials/user-experience-design/logo-user-experience-design.svg?ver=1559978845',
      },
      {
        title: 'Adobe Indesign',
        url:
          'https://hackr.io/tutorials/adobe-indesign/logo-adobe-indesign.svg?ver=1549098430',
      },
      {
        title: 'Information Architecture',
        url:
          'https://hackr.io/tutorials/information-architecture/logo-information-architecture.svg?ver=1550384494',
      },
      {
        title: 'Color Theory',
        url:
          'https://hackr.io/tutorials/color-theory/logo-color-theory.svg?ver=1549985558',
      },
      {
        title: 'Interaction Design',
        url:
          'https://hackr.io/tutorials/interaction-design/logo-interaction-design.svg?ver=1559978270',
      },
      {
        title: 'Affinity Photo',
        url:
          'https://hackr.io/tutorials/affinity-photo/logo-affinity-photo.svg?ver=1550669392',
      },
      {
        title: 'Branding',
        url:
          'https://hackr.io/tutorials/branding/logo-branding.svg?ver=1548759784',
      },
      {
        title: 'Content Strategy',
        url:
          'https://hackr.io/tutorials/content-strategy/logo-content-strategy.svg?ver=1548759783',
      },
      {
        title: 'Autodesk Maya',
        url:
          'https://hackr.io/tutorials/autodesk-maya/logo-autodesk-maya.svg?ver=1554094371',
      },
      {
        title: 'Autodesk 3ds Max',
        url:
          'https://hackr.io/tutorials/autodesk-3ds-max/logo-autodesk-3ds-max.svg?ver=1548759784',
      },
      {
        title: 'Prototyping',
        url:
          'https://hackr.io/tutorials/prototyping/logo-prototyping.svg?ver=1550384346',
      },
      {
        title: 'Product Design',
        url:
          'https://hackr.io/tutorials/product-design/logo-product-design.svg?ver=1548759784',
      },
      {
        title: 'Drawing',
        url: 'https://hackr.io/tutorials/drawing/logo-drawing.svg?ver=1550076652',
      },
      {
        title: 'Industrial Design',
        url:
          'https://hackr.io/tutorials/industrial-design/logo-industrial-design.svg?ver=1548759784',
      },
      {
        title: 'Digital Painting',
        url:
          'https://hackr.io/tutorials/digital-painting/logo-digital-painting.svg?ver=1550076640',
      },
      {
        title: 'Cinema 4D',
        url:
          'https://hackr.io/tutorials/cinema-4d/logo-cinema-4d.svg?ver=1549761800',
      },
      {
        title: 'Affinity Designer',
        url:
          'https://hackr.io/tutorials/affinity-designer/logo-affinity-designer.svg?ver=1549985573',
      },
      {
        title: 'UX Research',
        url:
          'https://hackr.io/tutorials/ux-research/logo-ux-research.svg?ver=1548822061',
      },
      {
        title: 'Typography',
        url:
          'https://hackr.io/tutorials/typography/logo-typography.svg?ver=1549985595',
      },
      {
        title: 'Wireframing',
        url:
          'https://hackr.io/tutorials/wireframing/logo-wireframing.svg?ver=1549985604',
      },
      {
        title: 'Figma',
        url: 'https://hackr.io/tutorials/figma/logo-figma.svg?ver=1550735263',
      },
      {
        title: 'Inkscape',
        url:
          'https://hackr.io/tutorials/inkscape/logo-inkscape.svg?ver=1551354757',
      },
      {
        title: 'Daz Studio',
        url:
          'https://hackr.io/tutorials/daz-studio/logo-daz-studio.svg?ver=1548759784',
      },
      {
        title: 'UX Pin',
        url: 'https://hackr.io/tutorials/ux-pin/logo-ux-pin.svg?ver=1556099549',
      },
      {
        title: 'Sketchbook Pro',
        url:
          'https://hackr.io/tutorials/sketchbook-pro/logo-sketchbook-pro.svg?ver=1548759784',
      },
      {
        title: 'InVision',
        url:
          'https://hackr.io/tutorials/invision/logo-invision.svg?ver=1548759783',
      },
      {
        title: 'Principle',
        url:
          'https://hackr.io/tutorials/principle/logo-principle.svg?ver=1549769352',
      },
      {
        title: 'Framer',
        url: 'https://hackr.io/tutorials/framer/logo-framer.svg?ver=1548759782',
      },
      {
        title: 'Origami Studio',
        url:
          'https://hackr.io/tutorials/origami-studio/logo-origami-studio.svg?ver=1548759783',
      },
      {
        title: 'Marvel',
        url: 'https://hackr.io/tutorials/marvel/logo-marvel.svg?ver=1550562876',
      },
      {
        title: 'Linux System Administration',
        url:
          'https://hackr.io/tutorials/linux-system-administration/logo-linux-system-administration.svg?ver=1555389741',
      },
      {
        title: 'AWS',
        url:
          'https://hackr.io/tutorials/amazon-web-services-aws/logo-amazon-web-services-aws.svg?ver=1555328044',
      },
      {
        title: 'Docker',
        url: 'https://hackr.io/tutorials/docker/logo-docker.svg?ver=1555389348',
      },
      {
        title: 'Google Cloud Platform',
        url:
          'https://hackr.io/tutorials/google-cloud-platform/logo-google-cloud-platform.svg?ver=1551354757',
      },
      {
        title: 'Kubernetes',
        url:
          'https://hackr.io/tutorials/kubernetes/logo-kubernetes.svg?ver=1555389652',
      },
      {
        title: 'Jenkins',
        url: 'https://hackr.io/tutorials/jenkins/logo-jenkins.svg?ver=1560403209',
      },
      {
        title: 'Ansible',
        url: 'https://hackr.io/tutorials/ansible/logo-ansible.svg?ver=1550847568',
      },
      {
        title: 'System Architecture',
        url:
          'https://hackr.io/tutorials/system-architecture/logo-system-architecture.svg?ver=1551354757',
      },
      {
        title: 'Microsoft Azure',
        url:
          'https://hackr.io/tutorials/microsoft-azure/logo-microsoft-azure.svg?ver=1551354757',
      },
      {
        title: 'Windows Server Administration',
        url:
          'https://hackr.io/tutorials/windows-server-administration/logo-windows-server-administration.svg?ver=1551354757',
      },
      {
        title: 'Apache Kafka',
        url:
          'https://hackr.io/tutorials/apache-kafka/logo-apache-kafka.svg?ver=1551354757',
      },
      {
        title: 'Serverless Computing',
        url:
          'https://hackr.io/tutorials/serverless-computing/logo-serverless-computing.svg?ver=1551354757',
      },
      {
        title: 'Vagrant',
        url: 'https://hackr.io/tutorials/vagrant/logo-vagrant.svg?ver=1557980642',
      },
      {
        title: 'Puppet',
        url: 'https://hackr.io/tutorials/puppet/logo-puppet.svg?ver=1558177620',
      },
    ],
  };
  
export default mock;
  