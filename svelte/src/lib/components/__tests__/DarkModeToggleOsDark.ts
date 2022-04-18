import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/svelte'
import './matchMediaTrue.mock' // Must be imported before the tested file
import DarkModeToggle from '../DarkModeToggle.svelte'

describe(("Dark mode toggle"), () => {
  test('renders with dark mode as default without reset button', () => {
    const { getByTestId, queryByText } = render(DarkModeToggle)

    expect(getByTestId('dark-mode-toggle')).toBeChecked()
    expect(queryByText("Reset to OS")).not.toBeInTheDocument()
  })
  test('changes on click and adds reset button', async () => {
    const { getByTestId, queryByText } = render(DarkModeToggle)

    const toggle = getByTestId('dark-mode-toggle')

    await fireEvent.click(toggle)

    expect(toggle).not.toBeChecked()
    expect(queryByText("Reset to OS")).toBeInTheDocument()
  })
  test('click on reset button resets', async () => {
    const { getByTestId, queryByText } = render(DarkModeToggle)

    const toggle = getByTestId('dark-mode-toggle')

    await fireEvent.click(toggle)

    const resetButton = queryByText("Reset to OS")

    await fireEvent.click(resetButton)

    expect(toggle).toBeChecked()
    expect(resetButton).not.toBeInTheDocument()
  })
})