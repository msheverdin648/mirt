from django.db import models



class Doctor(models.Model):
    

    class Meta:
        verbose_name = "Доктора"
        verbose_name_plural = "Доктора"

    def __str__(self):
        return self.fio
    

    fio = models.CharField(("ФИО доктора"), max_length=255)
    photo = models.ImageField(("Фото доктора"), upload_to='doctors')
    position = models.CharField(("Должность"), max_length=255)
    recording_order = models.CharField(("Порядок записи на прием"), max_length=255)
    certificate_data = models.TextField(("Данные сертификата специалиста"))
    additional_certificate_data = models.TextField(("Дополнительные данные сертификата"))

  
