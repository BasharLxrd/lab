import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  const Blogs = [
    {
      url: "https://stories-nextjs-v3.vercel.app/assets/imgs/news/news-2.jpg",
      alt: "iguana",
      title: '10 Easy Ways to Be Environmentally Conscious At Home',
      description: 'lizard is a good person',
    },
    {
      url: "https://www.insperity.com/wp-content/uploads/employees_reach_their_goals_1200x630.jpg",
      alt: "iguana",
      title: 'Top 7 Strategies to Achieve Your Goals',
      description: 'lizard is a good person',
    },
    {
      url: "https://cdn.careerprocanada.ca/wp-content/uploads/2021/01/Dream-Big-Set-Goals-Take-Action-e1609952738937.jpg",
      alt: "iguana",
      title: 'Supporting Clients in Achieving Their Goals',
      description: 'lizard is a good person',
    },
    {
      url: "https://www.asweetpeachef.com/wp-content/uploads/2014/04/SweetPeaChef_HowToFoodBlog_ver1_720x980.jpg",
      alt: "iguana",
      title: 'How To Start a Food Blog: Setting Up Your Blog',
      description: 'How To Start a Food Blog: Setting Up Your Blog',
    },
  ];
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Banner />
      <Blog items={Blogs} />
      <Footer />
    </div>
  );
}

export default App;
