import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
          <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Sed at iaculis purus. 
              Maecenas tincidunt vulputate magna, 
              sed tincidunt lectus pellentesque euismod. 
              Phasellus tincidunt risus eu posuere mollis. 
              Proin blandit, odio tempus laoreet efficitur, 
              purus lorem semper libero, ac auctor quam nisi non nunc. 
              Sed vitae leo nisi. Interdum et malesuada fames ac ante 
              ipsum primis in faucibus. Integer tellus magna, 
              laoreet sed tincidunt sit amet, iaculis egestas nibh. 
              Praesent odio leo, dignissim sed egestas nec, 
              ultricies sagittis dui.
          </p>
          <Link to="/">Go Back</Link>
        </div>
    )
}

export default About