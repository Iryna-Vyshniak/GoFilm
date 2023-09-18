import styled from 'styled-components';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(185, 228, 201, 0.7);
`;

export const PendingDog = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 15vw;
  height: auto;
  object-fit: contain;
  object-position: center;
`;
