import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  border-radius: 2px;

  font-size: 16px;
  font-weight: 700;

  display: flex;
  gap: 10px;
  align-items: center;

  transition: all 0.2s;

  &.inline {
    border: 1px solid #f8f9fa;
    background-color: transparent;
    color: #f8f9fa;
  }

  &.background {
    border: 1px solid #117bed;
    background-color: #117bed;
    color: #f8f9fa;
  }

  &.sm {
    padding: 4px 16px;
  }

  &.md {
    padding: 8px 32px;
  }

  &.lg {
    padding: 16px 32px;
  }

  &.full {
    width: 100%;
    justify-content: center;
  }
`
