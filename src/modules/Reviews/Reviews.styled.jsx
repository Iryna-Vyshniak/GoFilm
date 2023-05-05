import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
`;
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
export const ReviewPhotoThumb = styled.div`
  position: relative;
`;

export const ReviewPhoto = styled.img`
  display: block;

  height: 60px;
  width: auto;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  object-fit: cover;
  object-position: center;
`;

export const ReviewsAuthor = styled.p`
  color: ${props => props.theme.colors.accent};
  font-weight: 700;
`;
export const ReviewContent = styled.p`
  font-weight: 400;
`;
