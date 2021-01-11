export interface Puc_Configuration_Data {
  option_frameread1: string;
  id: string;
  option_maskwrite: string;
  option_frameread2: string;

  config_option_flag: boolean;

  family: string;

  option_text: string;

  option_maskread: string;

  config_feature: string;

  configuration_part_nr: string;

  part_nr: string;

  configuration_filepath: string;

  option_framewrite: string;

  option_mtc_scr: string;

  config_diagitem: string;

  config_requestwrite: string;

  option_plant_flag: string;

  option_mismatch: string;

  option_valueread: string;

  option_valuewrite: string;

  config_text: string;

  option_aftersales_flag: string;

  ecu_name: string;

  config_requestread: string;

  config_dataread: string;

  config_datawrite: string;

  config_size: string;

  configuration_filename: string;

  dll_validite: number;

  dll_checksum: number;

  dll_date_maj: Date;

  dll_date_creation: Date;
}
