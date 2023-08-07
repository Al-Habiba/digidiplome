import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartContractService } from '../../services/contract/smart-contract.service';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class MonComposant {

  selectedFile: File | undefined;
  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private smartContractService: SmartContractService
  ) {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  uploadFile() {
    if (this.uploadForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.smartContractService.hashDocument(this.selectedFile).subscribe(
        (response) => {
          const hash = response.hash;

          this.smartContractService.compareHashWithDatabase(hash).subscribe(
            (isAuthentic) => {
              if (isAuthentic) {
                alert('Le diplôme est authentique. Ajouté au profil de l\'étudiant.');
              } else {
                alert('Erreur : Le diplôme n\'est pas authentique.');
              }
            },
            (error) => {
              console.error('Erreur lors de la comparaison de hash :', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors du hashage du document :', error);
        }
      );
    }
  }
}