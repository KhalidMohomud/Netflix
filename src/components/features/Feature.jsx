import featuresDate from '../../content/features.json';
import Features from './Features';

const Feature = () => {
  return (
    <div>
      {featuresDate.map((feature) => {
        return (
          <div key={feature.alt}>
            {/* {feature.ti} */}
            <Features {...feature} />
   
        
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
