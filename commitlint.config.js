// eslint-disable-next-line @typescript-eslint/no-require-imports
const chalk = require('chalk')

const error = (text) => chalk.red(text)
const warning = (text) => chalk.yellow(text)
const info = (text) => chalk.blue(text)
const success = (text) => chalk.green(text)

const COMMIT_TYPES = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'test',
  'chore',
]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', COMMIT_TYPES],
    'subject-min-length': [2, 'always', 30],
    'header-max-length': [2, 'always', 120],
  },
  plugins: [
    {
      rules: {
        'type-empty': (parsed) => {
          const { type } = parsed
          if (!type) {
            return [
              false,
              `${error('✖ Lỗi:')} Commit phải có type!\n${info('Ví dụ:')} ${success('feat: Thêm tính năng đăng nhập')}`,
            ]
          }
          return [true]
        },
        'subject-empty': (parsed) => {
          const { subject } = parsed
          if (!subject) {
            return [
              false,
              `${error('✖ Lỗi:')} Commit phải có mô tả!\n${warning('Hãy thêm mô tả cho commit của bạn')}`,
            ]
          }
          return [true]
        },
        'type-enum': (parsed, _when, value) => {
          const { type } = parsed
          if (!value.includes(type)) {
            return [
              false,
              `${error('✖ Type không hợp lệ!')}\n${info('Chỉ được dùng:')} ${warning(value.join(', '))}`,
            ]
          }
          return [true]
        },
        'subject-min-length': (parsed) => {
          const { subject } = parsed
          if (subject && subject.length < 30) {
            return [
              false,
              `${error('✖ Mô tả quá ngắn!')}\n${info('Yêu cầu:')} ${warning('Ít nhất 30 ký tự để giải thích rõ thay đổi')}`,
            ]
          }
          return [true]
        },
        'header-max-length': (parsed) => {
          const { header } = parsed
          if (header && header.length > 120) {
            return [
              false,
              `${error('✖ Tiêu đề commit quá dài!')}\n
              ${info('Yêu cầu:')} Không quá 120 ký tự (hiện tại: ${header.length} ký tự)\n
              `,
            ]
          }
          return [true]
        },
      },
    },
  ],
  helpUrl: 'https://www.conventionalcommits.org/en/v1.0.0/',
}
