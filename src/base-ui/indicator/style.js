import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  @apply overflow-hidden;

  .i-content {
    position: relative;
    @apply flex;
    transition: transform 300ms ease;
    > * {
      @apply flex-shrink-0;
    }
  }
`;
