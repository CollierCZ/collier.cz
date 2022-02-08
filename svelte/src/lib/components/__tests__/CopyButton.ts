import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/svelte'
import CopyButton from '../CopyButton.svelte'

test('renders as a button with the right text', () => {
  const { getByText } = render(CopyButton, { textToCopy: "Copy this text"})

  expect(getByText('Copy')).toBeInTheDocument()
})
test('changes text when clicked and then changes back', async () => {
  const { getByText } = render(CopyButton, { textToCopy: "Copy this text"})

  await fireEvent.click(getByText('Copy'))

  expect(getByText('Copied')).toBeInTheDocument()
  
  await waitFor(() => expect(getByText('Copy')).toBeInTheDocument(), { timeout: 1600})
})
