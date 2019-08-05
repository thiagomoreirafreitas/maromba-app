import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.page.html',
  styleUrls: ['./macros.page.scss'],
})
export class MacrosPage implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && (campo.touched || campo.dirty);
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidacoesForm(formGroup) {
    Object.keys(formGroup.form.controls).forEach(campo => {
      const controle = formGroup.form.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

}
