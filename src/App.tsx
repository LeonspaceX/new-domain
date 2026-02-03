import { Box, Button, Container, Paper, Typography } from '@mui/material'

const NEW_DOMAIN = 'mahiro.space'

function App() {
  const handleRedirect = () => {
    const currentUrl = window.location.href
    const nextUrl = currentUrl.replace(/nekoqwq\.space/gi, NEW_DOMAIN)
    window.location.href = nextUrl
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 2,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            transition:
              'transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), backdrop-filter 260ms ease, background-color 260ms ease, box-shadow 260ms ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              backdropFilter: 'blur(14px)',
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              boxShadow: '0 14px 30px rgba(0, 0, 0, 0.12)',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" color="text.secondary">
              已迁移至新域名
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              已迁移至新域名！
            </Typography>
            <Typography component="div" color="text.secondary">
              Hi~Welcome to nekoqwq.space!
              <br />
              由于本域名将于2026-03-04 07:59:59过期，
              <s>且晓夜大笨蛋没钱续费</s>，所以换域名啦喵~
              <br />
              新域名是：
            </Typography>
            <Box
              sx={{
                px: 2,
                py: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'grey.50',
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: '1.1rem',
                letterSpacing: 0.2,
              }}
            >
              {NEW_DOMAIN}
            </Box>
            <Typography color="text.secondary">可以点击按钮立即前往哦~</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={handleRedirect}
                sx={{
                  bgcolor: '#39C5BB',
                  color: '#ffffff',
                  '&:hover': { bgcolor: '#2fb1a8' },
                }}
              >
                立即跳转喵
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default App