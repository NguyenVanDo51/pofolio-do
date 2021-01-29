import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Xin chào, Tôi là',
  name: 'Nguyễn Văn Đỏ',
  subtitle: 'Web developer',
  cta: 'Xem thêm',
};

// ABOUT DATA
export const aboutData = {
  img: 'myface.jpg',
  paragraphOne: 'Tôi có kinh nghiệm 6 tháng ở vị trí thực tập sinh và fresher. Sử dụng công nghệ chính là ReactJS, MYSQL, PHP (lumen Laravel). Ngoài ra, tôi có thể sử dụng tốt Bootstrap 4, SASS/SCSS, Loopback 4 framework, MongoDB.',
  paragraphTwo: 'Tôi luôn mong muốn được cống hiển hết mình cho công việc, nhờ đó nâng cao năng lực của bản thân. Không ngừng học tập, rèn luyện để có thể hoàn thành những mục tiêu đã đặt ra.',
  paragraphThree: 'Tôi có sở thích đọc blog và sách về công nghệ, phát triển sự nghiệp cá nhân. Tìm hiểu công nghệ mới, làm một số trang web nhỏ thú vị trong thời gian rảnh rỗi.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blo.png',
    title: 'Blo - Phần mềm chat cho doanh nghiệp',
    info: 'Blo là phần mềm chat dành riêng cho doanh nghiệp. Ngoài đáp ứng các tính năng của một ứng dụng chat như nhắn tin, video call. Blo còn cung cấp nhiều tính năng hữu ích trong công việc như Quản lý danh sách công việc, Quản lý nhân viên, phòng ban, chức vụ,... ',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nguyenvando510@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
