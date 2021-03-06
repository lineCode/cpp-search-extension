class HelpCommand extends Command {
    constructor() {
        super("help", "Show the help messages.")
    }

    onExecute() {
        const value = ([
            `Prefix ${c.match(":")} to execute command (:header, :history, etc)`,
        ]);
        return value.map((description, index) => {
            return {content: `${index + 1}`, description};
        });
    }
}