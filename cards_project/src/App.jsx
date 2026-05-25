import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Fronted Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park,USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad,India"
  },
  {
    brandLogo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/os-systems/apple-400crthiqdql2xp1h3vb.png/apple-gcdk0hadgcwu2g3gs9vq3n.png?_a=DATAiZAAZAA0",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Cupertino,USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Los Gatos,USA"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Bangalore,India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx0cmENacsYu8Z3kwcrZJRqc8oFsWe2n3Q&s",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hour",
    location: "Redmond,USA"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "New York,USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Austin,USA"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/nvidia-color.png",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "GPU Programmer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Santa Clara,USA"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/oracle-logo-115360039232wypouqbv7.png",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mumbai,India"
  }
];
  return (
    <div className="cards-container">
      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  );
};

export default App;

