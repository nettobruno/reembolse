
import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  border-radius: 2px;

  font-size: 16px;
  font-weight: 700;

  display: flex;
  gap: 10px;
  align-items: center;

  transition: all .2s;

  &.inline {
    border: 1px solid #F8F9FA;
    background-color: transparent;
    color: #F8F9FA;
  }

  &.background {
    border: 1px solid #117BED;
    background-color: #117BED;
    color: #F8F9FA;
  }

  &.sm {
    padding: 4px 16px;
  }

  &.md {
    padding: 8px 32px;
  }

  &.lg {
    padding: 16px 64px;
  }

  &.full {
    width: 100%;
    justify-content: center;
  }
`