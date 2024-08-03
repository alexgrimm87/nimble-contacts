import {render, screen} from '@testing-library/react';
import Tags from './index.jsx';

describe('Tags Component', () => {
  const tagsData = [
    {
      id: "5df60a4c5ac6bf48f1b8cd30/tag1",
      tag: "tag1"
    },
    {
      id: "5df60a4c5ac6bf48f1b8cd30/tag2",
      tag: "tag2"
    },
    {
      id: "5df60a4c5ac6bf48f1b8cd30/tag3",
      tag: "tag3"
    }
  ];

  it('renders a list of tags', () => {
    render(<Tags tags={tagsData} />);

    tagsData.forEach(tag => {
      expect(screen.getByText(tag.tag)).toBeInTheDocument();
    });
  });
});
