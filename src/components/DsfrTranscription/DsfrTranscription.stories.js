import { setup } from '@storybook/vue3'

import DsfrTranscription from './DsfrTranscription.vue'
import DsfrModal from '../DsfrModal/DsfrModal.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

setup(app => {
  app.component('DsfrModal', DsfrModal)
  app.component('VIcon', VIcon)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/transcription)
 */
export default {
  component: DsfrTranscription,
  title: 'Composants/Transcription - DsfrTranscription',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Titre du contenu sur lequel porte la transcription à destination des technologies d\'assistance',
    },
    content: {
      control: 'text',
      description: 'Transcription du contenu de la vidéo',
    },
    collapseValue: {
      control: 'text',
      description: 'Valeur en pixels de la hauteur de dépliement de la transcription',
    },
  },
}

export const Transcription = (args) => ({
  components: { DsfrTranscription, DsfrModal },
  data () {
    return args
  },
  template: `
    <DsfrTranscription
      :title="title"
      :content="content"
      :collapseValue="collapseValue"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Transcription.args = {
  dark: false,
  title: 'Chats hiver',
  content: 'Des chatons jouant dans la neige',
  collapseValue: '-114px',
}
