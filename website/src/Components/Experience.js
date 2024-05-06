function Experience(props) {
  return (
            <div class = "experience">
                <div class="experience-details">
                    <span class ="experience-title">{props.tile}</span>
                    <span class ="experience-company">{props.company}</span>
                    <span class ="experience-date">{props.date}</span>
                </div>
                <img class="experience-image" src = {props.img} alt={props.alt}></img>
            </div>
  );
}

export default Experience;