import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  resultado: string = null;
  p: any =
    {
      nome: null,
      sexo: null,
      idade: null,
      altura: null,
      peso: null
    };

  constructor() { }

  ngOnInit() {
  }

  salvar(f) {
    if (f.valid) {
      let pessoaValue = f.value;
      let imc = (pessoaValue.peso / (pessoaValue.altura * pessoaValue.altura));
      if (imc < 17)
        this.resultado = "Muito abaixo do peso";
      if (imc >= 17 && imc <= 18.49)
        this.resultado = "Abaixo do peso";
      if (imc >= 18.5 && imc <= 24.99)
        this.resultado = "Peso normal";
      if (imc >= 25 && imc <= 29.99)
        this.resultado = "Acima do peso";
      if (imc >= 30 && imc <= 34.99)
        this.resultado = "Obesidade I";
      if (imc >= 35 && imc <= 39.99)
        this.resultado = "Obesidade II (severa)";
      if (imc >= 40)
        this.resultado = "Obesidade III (mórbida)";
    }
    else {
      this.verificaValidacoesForm(f);
    }
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
