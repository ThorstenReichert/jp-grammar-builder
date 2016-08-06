import {inject} from 'aurelia-dependency-injection';
import {Project, ProjectItem, CLIOptions, UI} from 'aurelia-cli';

@inject(Project, CLIOptions, UI)
export default class ServiceGenerator {
  constructor(project, options, ui) {
    this.project = project;
    this.options = options;
    this.ui = ui;
  }

  execute() {
    return this.ui
      .ensureAnswer(this.options.args[0], 'What would you like to call the new item?')
      .then(name => {
        let fileName = this.project.makeFileName(name);
        let className = this.project.makeClassName(name);

        this.project.elements.add(
          ProjectItem.text(`../services/${fileName}.js`, this.generateSource(className))
        );

        return this.project.commitChanges()
          .then(() => this.ui.log(`Created ${fileName}.`));
      });
  }

  generateSource(className) {
return `import {noView} from 'aurelia-framework';

@noView
export class ${className}Service {

}

`
  }
}

