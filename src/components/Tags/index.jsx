import {TagsList} from "./styledComponents.js";
import TagItem from "../TagItem";

const Tags = ({tags}) => {
  return (
    <TagsList>
      {tags && tags.map((value, index) => (
        <TagItem key={index} tag={value.tag} />
      ))}
    </TagsList>
  );
};

export default Tags;
