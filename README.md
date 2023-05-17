# PomodoroPal App

The PomodoroPal App is an elevated task management application designed to help users stay focused and complete their to-do items effectively using the Pomodoro technique. This app allows users to create, edit, delete, start, and complete their to-do items while incorporating a customizable Pomodoro timer.

## App Requirements

- Users can create to-do items.
- Each to-do item can be edited, deleted, started, or completed.
- Editing a to-do item updates its content to the new input.
- Deleted to-do items are permanently removed and cannot be retrieved.
- When a to-do item is started, a Pomodoro timer initiates and is displayed to the user.
- During the work cycle, the timer displays "WORK"; during the rest cycle, it displays "REST".
- The default timer settings are 25 minutes of work followed by a 5-minute break.
- When a user completes an item or exits the browser, the timer stops.

## App Nice-To-Haves

- Users can customize their Pomodoro split, allowing flexibility in work and rest durations.
- The timer plays unique sounds to signal the start of a work cycle and a rest cycle.
- The number of Pomodoro cycles spent on an item is saved and persists for future work sessions.
- When an item is marked as completed, the number of Pomodoro cycles dedicated to that item is displayed next to it.

## Installation and Setup

1. Clone the repository:

```shell
git clone https://github.com/samuelaidoo45/pmdrtd.git
```

2. Navigate to the project directory:

```shell
cd pmdrtd
```

3. Install the required dependencies:

```shell
npm install
```

4. Start the application:

```shell
npm start
```

5. Access the PomodoroPal App in your browser at `http://localhost:3000`.

## Usage

1. Create a new to-do item by clicking on the "Add Item" button.
2. Edit a to-do item by clicking on the edit icon next to the item.
3. Delete a to-do item by clicking on the delete icon next to the item. Note that this action is permanent.
4. Start a to-do item by clicking on the play icon next to the item. The Pomodoro timer will start, displaying "WORK" during the work cycle and "REST" during the rest cycle.
5. Customize the Pomodoro split by adjusting the work and rest durations in the settings.
6. The timer will automatically stop when you mark an item as completed or when you exit the browser.

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Express, Node.js
- Database: MySQL (optional if backend with persistence is implemented)
- Browser Storage: Local Storage (if backend is not implemented)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The Pomodoro Technique - Developed by Francesco Cirillo
- [Pomodoro Timer Sound](https://www.zapsplat.com/sound-effect-category/pomodoro-timer/)
- [Icons by Icons8](https://icons8.com/)

---

This readme file provides an overview of the PomodoroPal App, its features, installation instructions, and usage guidelines. For further assistance or to request additional features, please reach out to the project maintainers.